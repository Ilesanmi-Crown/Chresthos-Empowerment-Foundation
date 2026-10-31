import React, { useEffect } from 'react';
import './ProfileModal.css';

export default function ProfileModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close profile modal"
        >
          <i className="bx bx-x"></i>
        </button>

        <div className="modal-layout">
          <div className="modal-photo-column">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className={`modal-photo ${member.isLogo ? 'is-logo' : ''}`} 
              />
            ) : (
              <div className="modal-photo-fallback">
                <span>{member.initials || member.name.slice(0, 2).toUpperCase()}</span>
              </div>
            )}
          </div>

          <div className="modal-content-column">
            {member.badge && <span className="modal-badge">{member.badge}</span>}
            <h3 className="modal-name">{member.name}</h3>
            <p className="modal-role">{member.role || member.title}</p>
            
            <div className="modal-divider"></div>

            <div className="modal-bio">
              {member.bioFull ? (
                <p>{member.bioFull}</p>
              ) : member.bio ? (
                <p>{member.bio}</p>
              ) : member.quote ? (
                <blockquote className="modal-quote">"{member.quote}"</blockquote>
              ) : (
                <p>{member.bioShort}</p>
              )}
            </div>

            {member.externalUrl && (
              <a 
                href={member.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-external-btn"
              >
                Visit Foundation Website <i className="bx bx-link-external"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
