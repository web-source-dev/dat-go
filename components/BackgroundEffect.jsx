import React, { useEffect, useRef } from 'react';

function BackgroundEffect() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes (small boxes)
    const nodes = [];
    const nodeCount = 80;
    const maxDistance = 150;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        connections: [],
        active: false,
        lastActive: 0
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Randomly activate nodes
        if (Math.random() < 0.005) {
          node.active = true;
          node.lastActive = currentTime;
        }

        // Deactivate after some time
        if (currentTime - node.lastActive > 2000) {
          node.active = false;
        }
      });

      // Calculate connections
      nodes.forEach((node, i) => {
        node.connections = [];
        nodes.slice(i + 1).forEach((otherNode, j) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            node.connections.push({
              target: j + i + 1,
              distance,
              strength: (maxDistance - distance) / maxDistance
            });
          }
        });
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;

      nodes.forEach(node => {
        node.connections.forEach(connection => {
          const targetNode = nodes[connection.target];
          const isActive = node.active || targetNode.active;

          if (isActive) {
            const alpha = Math.min(0.6, connection.strength * 0.8);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 2;
          } else {
            ctx.strokeStyle = `rgba(59, 130, 246, ${connection.strength * 0.1})`;
            ctx.lineWidth = 1;
          }

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const alpha = node.active ? 0.8 : 0.3;
        const size = node.active ? node.size * 1.5 : node.size;

        // Glow effect for active nodes
        if (node.active) {
          ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fillRect(node.x - size/2, node.y - size/2, size, size);

        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

export default BackgroundEffect;