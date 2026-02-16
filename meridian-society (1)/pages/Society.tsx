import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { Event } from '../types';

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6kQNy7KJCFvfB-dnwlFsmVSDbhZXb2W-y3i6omTundSZsOw2SVWb9TAPdR6P9pN8T/exec";

// Mock user details for the RSVP payload
const USER_DETAILS = {
  name: "Alexander L.",
  email: "alexander.l@ox.ac.uk"
};

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Spring Gala at The Arts Club',
    date: 'March 22, 2026',
    location: 'Mayfair, London',
    description: 'Join fellow members for an evening of networking and fine dining. Black tie required.',
    type: 'Gala',
    isRsvped: false
  },
  {
    id: '2',
    title: 'Guest Lecture: Future of Macroeconomics',
    date: 'April 10, 2026',
    location: 'Cambridge Union',
    description: 'Professor J. Thorne discusses post-digital economic policies. Q&A to follow.',
    type: 'Lecture',
    isRsvped: false
  },
  {
    id: '3',
    title: 'Private Viewing: Modern Masters',
    date: 'April 15, 2026',
    location: 'Tate Modern, Private Wing',
    description: 'Exclusive after-hours access to the new exhibition.',
    type: 'Networking',
    isRsvped: true
  }
];

const Society: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);
  const [toast, setToast] = useState<string | null>(null);
  const [loadingEventId, setLoadingEventId] = useState<string | null>(null);

  const handleRSVP = async (eventId: string, eventName: string) => {
    setLoadingEventId(eventId);
    const event = events.find(e => e.id === eventId);
    
    try {
      const payload = {
        formType: "rsvp",
        name: USER_DETAILS.name,
        email: USER_DETAILS.email,
        event: {
          eventName: eventName,
          eventId: eventId,
          dateTime: event?.date || "Date not specified"
        },
        rsvpStatus: "Attending",
        pageUrl: window.location.href,
        createdAt: new Date().toISOString()
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // 1. Update State on success
      setEvents(events.map(ev => 
        ev.id === eventId ? { ...ev, isRsvped: true } : ev
      ));

      // 2. Show Confirmation
      setToast(`RSVP Confirmed for ${eventName}. Check your email.`);
    } catch (err) {
      console.error(err);
      setToast("Connection error. Please try again.");
    } finally {
      setLoadingEventId(null);
      // Hide toast after delay
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 border-b border-stone-200 pb-8 flex flex-col md:flex-row justify-between items-end">
        <div>
           <h1 className="font-serif text-4xl text-meridian-navy mb-2">The Society</h1>
           <p className="text-stone-500 font-light">Exclusive events and announcements.</p>
        </div>
        <div className="mt-4 md:mt-0">
           <button className="text-xs uppercase tracking-widest border border-stone-300 px-6 py-3 rounded-luxury font-bold text-meridian-navy hover:bg-meridian-navy hover:text-white transition-all duration-300">Download Calendar (.ics)</button>
        </div>
      </header>
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 right-8 bg-meridian-navy text-white px-6 py-4 rounded-luxury shadow-lg flex items-center animate-fade-in-up z-50">
          <CheckCircle size={20} className="text-meridian-gold mr-3" />
          <span className="text-sm tracking-wide font-medium">{toast}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-stone-200 p-8 rounded-luxury hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-stone-50 text-stone-600 px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold">
                {event.type}
              </span>
              <span className="text-stone-400 text-sm font-medium">{event.date}</span>
            </div>

            <h3 className="font-serif text-2xl text-meridian-navy mb-3">{event.title}</h3>
            
            <div className="flex flex-col space-y-2 mb-6 text-sm text-stone-500 font-light">
              <div className="flex items-center">
                <MapPin size={14} className="mr-2" /> {event.location}
              </div>
              <div className="flex items-center">
                 <Clock size={14} className="mr-2" /> 19:00 - 22:00
              </div>
            </div>

            <p className="text-stone-600 mb-8 leading-relaxed font-light">{event.description}</p>

            {event.isRsvped ? (
              <button 
                disabled 
                className="w-full bg-green-50 text-green-900 border border-green-200 py-3.5 rounded-luxury text-xs uppercase tracking-widest font-bold flex justify-center items-center cursor-default shadow-sm"
              >
                <CheckCircle size={14} className="mr-2" /> RSVP'd
              </button>
            ) : (
              <button 
                onClick={() => handleRSVP(event.id, event.title)}
                disabled={loadingEventId === event.id}
                className="w-full bg-meridian-navy text-white py-3.5 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loadingEventId === event.id ? (
                  <>Processing <Loader2 size={14} className="ml-2 animate-spin" /></>
                ) : (
                  'RSVP Now'
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Society;