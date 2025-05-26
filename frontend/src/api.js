const BASE = 'http://localhost:3000/api';

/* ---- helpers ---- */
const j = body => ({ headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

/* ---- Classes ---- */
export const getClasses = () => fetch(`${BASE}/classes`).then(r => r.json());
export const addClass = (b) => fetch(`${BASE}/classes`, { method: 'POST', ...j(b) });
export const updateClass = (id, b) =>
  fetch(`${BASE}/classes/${id}`, { method: 'PUT', ...j(b) })
    .then(async response => {
      if (!response.ok) {
        try {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to update class');
        } catch (jsonError) {
          // If JSON parsing fails, use status text or a generic message
          throw new Error(`Failed to update class: ${response.statusText || 'Server error'}`);
        }
      }
      // For successful responses, handle potentially empty responses
      if (response.status === 204) {
        return {}; // No content but success
      }
      return response.json().catch(() => ({})); // Return empty object if JSON parsing fails
    });
export const deleteClass = (id) => fetch(`${BASE}/classes/${id}`, { method: 'DELETE' });

/* ---- Trainers ---- */
export const getTrainers = () => fetch(`${BASE}/trainers`).then(r => r.json());
export const addTrainer = (b) => fetch(`${BASE}/trainers`, { method: 'POST', ...j(b) });
export const updateTrainer = (id, b) => fetch(`${BASE}/trainers/${id}`, { method: 'PUT', ...j(b) });
export const deleteTrainer = (id) => fetch(`${BASE}/trainers/${id}`, { method: 'DELETE' });

/* ---- Members ---- */
export const getMembers = () => fetch(`${BASE}/gym-members`).then(r => r.json());
export const addMember = (b) => fetch(`${BASE}/gym-members`, { method: 'POST', ...j(b) });
export const updateMember = (id, b) => fetch(`${BASE}/gym-members/${id}`, { method: 'PUT', ...j(b) });
export const deleteMember = (id) => fetch(`${BASE}/gym-members/${id}`, { method: 'DELETE' });


/* ---- Bookings ---- */
export const getBookings = () => fetch(`${BASE}/bookings`).then(r => r.json());
export const addBooking = (b) =>
  fetch(`${BASE}/bookings`, { method: 'POST', ...j(b) })
    .then(async response => {
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking');
      }
      return response.json();
    });
export const deleteBooking = (id) => fetch(`${BASE}/bookings/${id}`, { method: 'DELETE' });

export const login = ({ username, password }) =>
  fetch(`${BASE}/login`, {
    method: 'POST',
    // j() helper'ı hem headers'ı hem body'yi döndürüyor
    ...j({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Login failed');
      return res.json();
    });

/* ---- Dashboard Statistics ---- */
export const getTrainerStats = () => fetch(`${BASE}/stats/trainers`).then(r => r.json());
export const getMembershipDistribution = () => fetch(`${BASE}/stats/membership-distribution`).then(r => r.json());
export const getInactiveMembers = () => fetch(`${BASE}/stats/inactive-members`).then(r => r.json());
export const getClassPopularity = () => fetch(`${BASE}/stats/class-popularity`).then(r => r.json());
export const getMemberEngagement = () => fetch(`${BASE}/stats/member-engagement`).then(r => r.json());


