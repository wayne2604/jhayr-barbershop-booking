import { useSelector, useDispatch } from 'react-redux';
import {
  closeModal,
  setService,
  setBarber,
  setTime,
  resetBooking,
} from '../store/bookingSlice';
import { useState, useEffect } from 'react';
import hensonImg from '../assets/henson.png';

const barbers = [
  { name: 'Henson', title: 'Master Barber & Style Architect', image: hensonImg },
];

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
];

const Booking = () => {
  const dispatch = useDispatch();
  const { isModalOpen, selectedService, selectedBarber, selectedTime } =
    useSelector((state) => state.booking);

  // local states for transitioning and success check
  const [isOpenState, setIsOpenState] = useState(false);
  const [isClosingState, setIsClosingState] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsSuccess(false);
      setIsOpenState(true);
      setIsClosingState(false);
    } else if (isOpenState) {
      setIsOpenState(false);
      setIsClosingState(true);
      const timer = setTimeout(() => {
        setIsClosingState(false);
        setIsSuccess(false);
      }, 150); // Matches --modal-close-dur (150ms)
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  if (!isModalOpen && !isClosingState) return null;

  const isComplete = selectedService && selectedBarber && selectedTime;

  const handleConfirm = () => {
    if (!isComplete) return;
    // Set success screen instead of plain alert box
    setIsSuccess(true);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 font-['Outfit'] transition-all duration-300 ${
        isOpenState ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none pointer-events-none'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      onClick={handleOverlayClick}
      data-motion-id="booking-overlay"
    >
      {/* Modal container with t-modal transition classes */}
      <div
        className={`t-modal relative w-full max-w-lg max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl border border-[#d4a853]/20 shadow-3d-lg ${
          isOpenState ? 'is-open' : ''
        } ${isClosingState ? 'is-closing' : ''}`}
        style={{
          background: '#121214',
          boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,168,83,0.08)',
        }}
        data-motion-id="booking-dialog"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8">
          {isSuccess ? (
            /* Premium Success Check Animation Screen */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span
                className="t-success-check text-[#d4a853] mb-6"
                data-state="in"
                aria-hidden="true"
              >
                <svg className="w-20 h-20 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 24L20 34L38 14" />
                </svg>
              </span>
              
              <h3
                className="text-2xl font-bold tracking-[0.08em] mb-3"
                style={{
                  background: 'linear-gradient(135deg, #d4a853, #f5e6c8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BOOKING CONFIRMED!
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs">
                Your session for a <span className="text-[#d4a853] font-medium">{selectedService}</span> with <span className="text-[#d4a853] font-medium">{selectedBarber}</span> at <span className="text-[#d4a853] font-medium">{selectedTime}</span> is officially secured.
              </p>

              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-lg font-semibold tracking-wider text-[#0a0a0f] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #d4a853, #c9944a)',
                }}
              >
                GOT IT
              </button>
            </div>
          ) : (
            /* Booking Selection Screen */
            <>
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <h2
                  className="text-2xl font-bold tracking-[0.06em]"
                  style={{
                    background: 'linear-gradient(135deg, #d4a853, #f5e6c8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  BOOK YOUR SESSION
                </h2>
                {selectedService && (
                  <p className="font-satoshi mt-2 text-[#d4a853] text-sm tracking-wider font-medium">
                    ✦ {selectedService}
                  </p>
                )}
              </div>

              {/* Service selection (if none pre-selected) */}
              {!selectedService && (
                <div className="mb-6 pb-6 border-b border-white/5">
                  <h3 className="text-white text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                    Select Service
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Choose a service from the menu or select one below to get started.
                  </p>
                </div>
              )}

              {/* Barber selection */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <h3 className="font-ibm text-white text-sm font-normal tracking-[0.1em] uppercase mb-4 text-center">
                  Choose Your Barber
                </h3>
                <div className="flex justify-center">
                  {barbers.map((barber) => {
                    const isSelected = selectedBarber === barber.name;
                    return (
                      <button
                        key={barber.name}
                        onClick={() => dispatch(setBarber(barber.name))}
                        className="group relative flex flex-col items-center w-64 p-6 rounded-2xl border transition-all duration-500 cursor-pointer"
                        style={{
                          background: isSelected
                            ? 'rgba(212, 168, 83, 0.06)'
                            : 'rgba(255, 255, 255, 0.02)',
                          borderColor: isSelected
                            ? 'rgba(212, 168, 83, 0.4)'
                            : 'rgba(255, 255, 255, 0.05)',
                          boxShadow: isSelected
                            ? '0 10px 30px rgba(212, 168, 83, 0.1)'
                            : 'none',
                          transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                        }}
                      >
                        {/* Henson's Photo container */}
                        <div 
                          className={`w-24 h-24 rounded-full overflow-hidden border mb-4 transition-all duration-500
                            ${isSelected 
                              ? 'border-[#d4a853] shadow-[0_0_20px_rgba(212,168,83,0.3)] scale-105' 
                              : 'border-white/10 group-hover:border-[#d4a853]/50'
                            }
                          `}
                        >
                          <img
                            src={barber.image}
                            alt={barber.name}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <span className={`font-playfair text-base font-bold tracking-wide ${isSelected ? 'text-[#d4a853]' : 'text-white'}`}>
                          {barber.name}
                        </span>
                        <span className="text-xs text-gray-500 mt-1 text-center font-light font-satoshi leading-tight">
                          {barber.title}
                        </span>
                        
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#d4a853] flex items-center justify-center shadow-lg">
                            <span className="text-[#0a0a0f] text-xs font-extrabold">✓</span>
                          </div>
                        )}
                        
                        {/* Accent top gold border highlight */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot selection */}
              <div className="mb-8 pb-6 border-b border-white/5">
                <h3 className="text-white text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                  Pick a Time
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => dispatch(setTime(time))}
                        className="font-satoshi py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
                        style={{
                          background: isSelected
                            ? 'linear-gradient(135deg, #d4a853, #c9944a)'
                            : 'rgba(255, 255, 255, 0.04)',
                          color: isSelected ? '#0a0a0f' : '#9ca3af',
                          border: isSelected
                            ? '1px solid transparent'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                          boxShadow: isSelected
                            ? '0 4px 15px rgba(212, 168, 83, 0.25)'
                            : 'none',
                        }}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confirm button */}
              <button
                onClick={handleConfirm}
                disabled={!isComplete}
                className="group relative w-full py-4 rounded-xl font-semibold tracking-[0.12em] uppercase text-sm transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
                style={{
                  background: isComplete
                    ? 'linear-gradient(135deg, #d4a853, #c9944a)'
                    : 'rgba(255, 255, 255, 0.06)',
                  color: isComplete ? '#0a0a0f' : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isComplete
                    ? '0 4px 25px rgba(212, 168, 83, 0.3)'
                    : 'none',
                }}
                data-motion-id="booking-confirm"
              >
                <span className="relative z-10">
                  {isComplete ? 'Confirm Booking' : 'Complete All Selections'}
                </span>
                {isComplete && (
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 40px rgba(212, 168, 83, 0.4)',
                    }}
                  />
                )}
              </button>

              {/* Selection summary */}
              {isComplete && (
                <div className="mt-4 p-3 rounded-lg bg-[#d4a853]/5 border border-[#d4a853]/10">
                  <p className="font-ibm text-gray-400 text-xs text-center">
                    <span className="text-[#d4a853]">{selectedService}</span> with{' '}
                    <span className="text-[#d4a853]">{selectedBarber}</span> at{' '}
                    <span className="text-[#d4a853]">{selectedTime}</span>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
