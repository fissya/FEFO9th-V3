import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CountdownTimerProps {
  eventDate: Date;
  eventName: string;
}

const CountdownTimer = ({ eventDate, eventName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isEventPassed, setIsEventPassed] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsEventPassed(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(timer);
  }, [eventDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const timeBoxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-secondary bg-opacity-50 rounded-xl p-6 md:p-8 shadow-md max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Calendar className="text-primary mr-3 h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-japanese font-bold">
          {isEventPassed ? `${eventName} Has Started!` : `Countdown to ${eventName}`}
        </h3>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <Clock className="text-primary mr-2 h-5 w-5" />
        <p className="text-foreground text-sm">
          {eventDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {isEventPassed ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-6"
        >
          <p className="text-xl text-primary font-bold mb-2">The event has begun!</p>
          <p className="text-foreground">We hope you're enjoying the experience!</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {timeBoxes.map((box, index) => (
            <motion.div 
              key={box.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-20"></div>
                <motion.span 
                  key={`${box.label}-${box.value}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="block text-2xl md:text-3xl font-bold text-primary"
                >
                  {formatNumber(box.value)}
                </motion.span>
              </div>
              <span className="text-xs md:text-sm mt-2 block text-foreground">{box.label}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;