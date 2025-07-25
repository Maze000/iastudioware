import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Star, Zap, Rocket, Trophy } from 'lucide-react';

interface ClickableElement {
  id: string;
  x: number;
  y: number;
  type: 'star' | 'rocket' | 'gem' | 'lightning';
  points: number;
  size: number;
}

interface Explosion {
  id: string;
  x: number;
  y: number;
  points: number;
}

const CosmicClicker: React.FC = () => {
  const [score, setScore] = useState(0);
  const [elements, setElements] = useState<ClickableElement[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);

  const elementTypes = [
    { type: 'star' as const, icon: Star, points: 10, color: 'text-orange-500', size: 40 }, // Using site's secondary color
    { type: 'rocket' as const, icon: Rocket, points: 25, color: 'text-indigo-500', size: 45 }, // Using site's primary color
    { type: 'gem' as const, icon: Sparkles, points: 50, color: 'text-slate-400', size: 35 }, // Using site's muted color
    { type: 'lightning' as const, icon: Zap, points: 100, color: 'text-indigo-400', size: 50 }, // Using site's primary variant
  ];

  const getRandomPosition = useCallback(() => {
    const gameArea = document.getElementById('cosmic-game-area');
    if (!gameArea) return { x: 50, y: 50 };
    
    const rect = gameArea.getBoundingClientRect();
    const margin = 60;
    return {
      x: Math.random() * (rect.width - margin * 2) + margin,
      y: Math.random() * (rect.height - margin * 2) + margin,
    };
  }, []);

  const createRandomElement = useCallback(() => {
    const position = getRandomPosition();
    const elementType = elementTypes[Math.floor(Math.random() * elementTypes.length)];
    
    const newElement: ClickableElement = {
      id: `element-${Date.now()}-${Math.random()}`,
      x: position.x,
      y: position.y,
      type: elementType.type,
      points: elementType.points * level,
      size: elementType.size,
    };
    
    return newElement;
  }, [getRandomPosition, level]);

  const moveElements = useCallback(() => {
    setElements(prevElements => 
      prevElements.map(element => {
        const newPosition = getRandomPosition();
        return {
          ...element,
          x: newPosition.x,
          y: newPosition.y,
        };
      })
    );
  }, [getRandomPosition]);

  const handleElementClick = useCallback((element: ClickableElement) => {
    // Add explosion effect
    const explosion: Explosion = {
      id: `explosion-${Date.now()}`,
      x: element.x,
      y: element.y,
      points: element.points,
    };
    
    setExplosions(prev => [...prev, explosion]);
    
    // Remove explosion after animation
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== explosion.id));
    }, 1000);
    
    // Update score and streak
    setScore(prev => prev + element.points);
    setStreak(prev => prev + 1);
    
    // Remove clicked element and create new one
    setElements(prev => {
      const filtered = prev.filter(el => el.id !== element.id);
      return [...filtered, createRandomElement()];
    });
    
    // Level up every 10 clicks
    if (streak > 0 && (streak + 1) % 10 === 0) {
      setLevel(prev => prev + 1);
    }
  }, [createRandomElement, streak]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setStreak(0);
    setLevel(1);
    setElements([createRandomElement(), createRandomElement()]);
  };

  const stopGame = () => {
    setGameActive(false);
    setElements([]);
    setExplosions([]);
  };

  // Move elements periodically
  useEffect(() => {
    if (!gameActive) return;
    
    const interval = setInterval(moveElements, 2000 - (level * 100)); // Faster movement as level increases
    return () => clearInterval(interval);
  }, [gameActive, moveElements, level]);

  // Add more elements as level increases
  useEffect(() => {
    if (!gameActive) return;
    
    const targetElements = Math.min(2 + Math.floor(level / 2), 6);
    const currentElements = elements.length;
    
    if (currentElements < targetElements) {
      const newElements = Array.from({ length: targetElements - currentElements }, () => createRandomElement());
      setElements(prev => [...prev, ...newElements]);
    }
  }, [level, gameActive, elements.length, createRandomElement]);

  const getElementConfig = (type: ClickableElement['type']) => {
    return elementTypes.find(et => et.type === type) || elementTypes[0];
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <Card className="bg-gradient-to-br from-slate-900 to-indigo-900 border-indigo-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Sparkles className="text-indigo-500" />
            Big Bang Clicker
            <Sparkles className="text-indigo-500" />
          </CardTitle>
          <p className="text-slate-300">Click the cosmic elements before they move!</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Game Stats */}
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-sm px-2 py-1">
              <Trophy className="w-3 h-3 mr-1" />
              Score: {score.toLocaleString()}
            </Badge>
            <Badge variant="outline" className="text-sm px-2 py-1 border-indigo-500">
              Level: {level}
            </Badge>
            <Badge variant="outline" className="text-sm px-2 py-1 border-orange-500">
              Streak: {streak}
            </Badge>
          </div>

          {/* Game Controls */}
          <div className="flex justify-center gap-4">
            {!gameActive ? (
              <Button onClick={startGame} size="sm" className="bg-gradient-to-r from-indigo-500 to-orange-500 hover:from-indigo-600 hover:to-orange-600">
                <Rocket className="w-3 h-3 mr-1" />
                Start Game
              </Button>
            ) : (
              <Button onClick={stopGame} variant="destructive" size="sm">
                Stop Game
              </Button>
            )}
          </div>

          {/* Game Area */}
          <div 
            id="cosmic-game-area"
            className="relative w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-indigo-500/30 overflow-hidden"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(15, 23, 42, 1) 70%)' }}
          >
            {/* Clickable Elements */}
            {elements.map((element) => {
              const config = getElementConfig(element.type);
              const IconComponent = config.icon;
              
              return (
                <button
                  key={element.id}
                  onClick={() => handleElementClick(element)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse ${config.color}`}
                  style={{
                    left: `${element.x}px`,
                    top: `${element.y}px`,
                    fontSize: `${element.size}px`,
                  }}
                >
                  <IconComponent 
                    size={element.size} 
                    className="drop-shadow-lg hover:drop-shadow-2xl filter hover:brightness-125"
                  />
                </button>
              );
            })}

            {/* Explosion Effects */}
            {explosions.map((explosion) => (
              <div
                key={explosion.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  left: `${explosion.x}px`,
                  top: `${explosion.y}px`,
                }}
              >
                <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-indigo-400 opacity-75"></div>
                <div className="animate-bounce text-2xl font-bold text-white bg-indigo-600 rounded-full px-3 py-1 shadow-lg">
                  +{explosion.points}
                </div>
              </div>
            ))}

            {/* Background Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Game Instructions */}
            {!gameActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-indigo-400 animate-spin" />
                  <p className="text-lg">Press "Start Game" to begin!</p>
                  <p className="text-sm mt-2">Cosmic elements will move every few seconds</p>
                </div>
              </div>
            )}
          </div>

          {/* Game Tips */}
          {gameActive && (
            <div className="text-center text-sm text-slate-400 space-y-1">
              <p>💫 Star: {10 * level} points | 🚀 Rocket: {25 * level} points</p>
              <p>✨ Gem: {50 * level} points | ⚡ Lightning: {100 * level} points</p>
              <p>Every 10 clicks you level up and points increase!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CosmicClicker;
