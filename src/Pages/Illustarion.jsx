import React, { useState, useEffect, useRef } from 'react';


const EnhancedPartsSelector = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [sourceImage, setSourceImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedPart, setSelectedPart] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hoveredPart, setHoveredPart] = useState(null);

  // Configuration constants
  const colorTolerance = 350;
  const brightnessExtraAllowance = 95;
  const selectedFillColor = { r: 255, g: 0, b: 0 }; // Red
  const hoverFillColor = { r: 0, g: 255, b: 0, a: 0.5 }; // Semi-transparent green

  // Parts data with enhanced information
  const parts = [
    {
      id: 1,
      name: "Chain",
      price: 149.99,
      description: "Heavy-duty drive chain for optimal power transfer",
      regions: [
        { x1: 0, y1: 450, x2: 200, y2: 600 }
      ]
    },
    {
      id: 2,
      name: "Tensioner Arm",
      price: 89.99,
      description: "Maintains proper chain tension for smooth operation",
      regions: [
        { x1: 200, y1: 150, x2: 400, y2: 300 }
      ]
    },
    {
      id: 3,
      name: "Mounting Plate",
      price: 129.99,
      description: "Secure mounting plate for stable component attachment",
      regions: [
        { x1: 200, y1: 50, x2: 350, y2: 150 }
      ]
    },
    {
      id: 4,
      name: "Mounting Bolt",
      price: 19.99,
      description: "High-strength mounting bolt with anti-vibration design",
      regions: [
        { x1: 350, y1: 200, x2: 400, y2: 250 }
      ]
    }
  ];

  const findPartAtPoint = (x, y) => {
    return parts.find(part => 
      part.regions.some(region => 
        x >= region.x1 && x <= region.x2 && 
        y >= region.y1 && y <= region.y2
      )
    );
  };

  const floodFill = (imageData, startX, startY, baseColor, fillColor) => {
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const pixelData = imageData.data;
    const visitedPixels = new Array(width * height).fill(false);
    const pixelQueue = [{ x: startX, y: startY }];

    const shouldProcessPixel = (x, y) => {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      if (visitedPixels[y * width + x]) return false;

      const pixelIndex = (y * width + x) * 4;
      const red = pixelData[pixelIndex];
      const green = pixelData[pixelIndex + 1];
      const blue = pixelData[pixelIndex + 2];

      const brightness = (red + green + blue) / 3;
      const darkThreshold = 100;

      if (brightness > darkThreshold + brightnessExtraAllowance) return false;

      return (
        Math.abs(red - baseColor.r) < colorTolerance &&
        Math.abs(green - baseColor.g) < colorTolerance &&
        Math.abs(blue - baseColor.b) < colorTolerance
      );
    };

    while (pixelQueue.length > 0) {
      const { x, y } = pixelQueue.pop();
      const pixelIndex = (y * width + x) * 4;

      if (visitedPixels[y * width + x]) continue;
      visitedPixels[y * width + x] = true;

      pixelData[pixelIndex] = fillColor.r;
      pixelData[pixelIndex + 1] = fillColor.g;
      pixelData[pixelIndex + 2] = fillColor.b;
      if (fillColor.a !== undefined) {
        pixelData[pixelIndex + 3] = fillColor.a * 255;
      }

      const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [-1, -1], [1, -1], [-1, 1]
      ];

      directions.forEach(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (shouldProcessPixel(newX, newY)) {
          pixelQueue.push({ x: newX, y: newY });
        }
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setSourceImage(img);
          setIsImageLoaded(true);
          if (canvasRef.current) {
            canvasRef.current.width = img.width;
            canvasRef.current.height = img.height;
            contextRef.current?.drawImage(img, 0, 0);
          }
        };
        img.src = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCanvasClick = (e) => {
    if (!isImageLoaded || !contextRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    const clickedPart = findPartAtPoint(x, y);
    if (clickedPart) {
      setSelectedPart(clickedPart);
      
      // Reset canvas and apply fill
      contextRef.current.drawImage(sourceImage, 0, 0);
      const imageData = contextRef.current.getImageData(
        0, 0, canvasRef.current.width, canvasRef.current.height
      );
      
      const clickedPixelIndex = (y * canvasRef.current.width + x) * 4;
      const baseColor = {
        r: imageData.data[clickedPixelIndex],
        g: imageData.data[clickedPixelIndex + 1],
        b: imageData.data[clickedPixelIndex + 2]
      };

      floodFill(imageData, x, y, baseColor, selectedFillColor);
      contextRef.current.putImageData(imageData, 0, 0);
    }
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = Math.floor(e.clientX - rect.left);
      const y = Math.floor(e.clientY - rect.top);
      setMousePos({ x, y });

      const part = findPartAtPoint(x, y);
      if (part !== hoveredPart) {
        setHoveredPart(part);
        if (part && contextRef.current && !selectedPart) {
          // Show hover effect only if no part is selected
          contextRef.current.drawImage(sourceImage, 0, 0);
          const imageData = contextRef.current.getImageData(
            0, 0, canvasRef.current.width, canvasRef.current.height
          );
          
          const pixelIndex = (y * canvasRef.current.width + x) * 4;
          const baseColor = {
            r: imageData.data[pixelIndex],
            g: imageData.data[pixelIndex + 1],
            b: imageData.data[pixelIndex + 2]
          };

          floodFill(imageData, x, y, baseColor, hoverFillColor);
          contextRef.current.putImageData(imageData, 0, 0);
        } else if (!selectedPart) {
          // Reset canvas if no part is hovered or selected
          contextRef.current?.drawImage(sourceImage, 0, 0);
        }
      }
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 !mt-26">
      <div>
        <div>
          <div>Interactive Vehicle Parts Selector</div>
        </div>
        <div>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative border rounded-lg overflow-hidden bg-slate-50">
                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  onMouseMove={handleMouseMove}
                  className="cursor-crosshair max-w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-slate-500">
                Cursor Position: ({mousePos.x}, {mousePos.y})
              </div>

              {hoveredPart && !selectedPart && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-700">Hovering: {hoveredPart.name}</div>
                </div>
              )}

              {selectedPart && (
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="text-lg font-semibold mb-2">{selectedPart.name}</div>
                  <div className="text-sm text-slate-600 mb-2">{selectedPart.description}</div>
                  <div className="text-xl font-bold text-blue-600">${selectedPart.price}</div>
                  <button 
                    onClick={() => {
                      setSelectedPart(null);
                      contextRef.current?.drawImage(sourceImage, 0, 0);
                    }}
                    className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Reset Selection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPartsSelector;