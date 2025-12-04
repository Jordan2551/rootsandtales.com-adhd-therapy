let modals = {};

window.addEventListener('load', () => {
  console.log('modals loaded');
  modals = {
    'contact-modal': {
      openButton: document.querySelectorAll('#contact-modal-open'),
      closeButton: document.getElementById('contact-modal-close'),
      modal: document.getElementById('contact-modal'),
    },
    'service-modal-assessment': {
      openButton: document.querySelectorAll('#service-modal-open-assessment'),
      closeButton: document.getElementById('service-modal-close-assessment'),
      modal: document.getElementById('service-modal-assessment'),
    },
    'service-modal-psychotherapy': {
      openButton: document.querySelectorAll('#service-modal-open-psychotherapy'),
      closeButton: document.getElementById('service-modal-close-psychotherapy'),
      modal: document.getElementById('service-modal-psychotherapy'),
    },
    'service-modal-neurofeedback': {
      openButton: document.querySelectorAll('#service-modal-open-neurofeedback'),
      closeButton: document.getElementById('service-modal-close-neurofeedback'),
      modal: document.getElementById('service-modal-neurofeedback'),
    },
    'service-modal-parent-training': {
      openButton: document.querySelectorAll('#service-modal-open-parent-training'),
      closeButton: document.getElementById('service-modal-close-parent-training'),
      modal: document.getElementById('service-modal-parent-training'),
    },
    'service-modal-medication': {
      openButton: document.querySelectorAll('#service-modal-open-medication'),
      closeButton: document.getElementById('service-modal-close-medication'),
      modal: document.getElementById('service-modal-medication'),
    }
  };

  Object.values(modals).forEach((modal) => {
    modal.openButton.forEach((button) => {
      button.addEventListener('click', () => {
        openModal(modal.modal);
      });
    });

    modal.closeButton.addEventListener('click', () => {
      closeModal(modal.modal);
    });

    modal.modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        closeModal(modal.modal);
      }
    });

    modal.modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal(modal.modal);
      }
    });
  });
});

function closeModal(modal) {
  modal.classList.add('hidden');
  modal.classList.remove('show');
}

function openModal(modal) {
  modal.style.animation = 'fadeIn 0.5s';
  modal.classList.add('show');
  modal.classList.add('show');
  modal.classList.remove('hidden');
}
