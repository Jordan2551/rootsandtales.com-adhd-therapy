let modals = {};

window.addEventListener('load', () => {
  console.log('modals loaded');
  modals = {
    'contact-modal': {
      openButton: document.querySelectorAll('#contact-modal-open'),
      closeButton: document.getElementById('contact-modal-close'),
      modal: document.getElementById('contact-modal'),
    },
    'service-modal-adhd-treatment': {
      openButton: document.querySelectorAll(
        '#service-modal-open-adhd-treatment'
      ),
      closeButton: document.getElementById(
        'service-modal-close-adhd-treatment'
      ),
      modal: document.getElementById('service-modal-adhd-treatment'),
    },
    'service-modal-adhd-assessments': {
      openButton: document.querySelectorAll(
        '#service-modal-open-adhd-assessments'
      ),
      closeButton: document.getElementById(
        'service-modal-close-adhd-assessments'
      ),
      modal: document.getElementById('service-modal-adhd-assessments'),
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
