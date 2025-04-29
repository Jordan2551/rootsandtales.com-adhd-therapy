function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    send_to: 'AW-16611034650/TZ9lCLDx0cMZEJqM4fA9',
    event_callback: callback,
  });
  return false;
}

window.addEventListener('load', () => {
  console.log('conversions loaded');
  const bookAnAppointmentButtons = document.querySelectorAll(
    '#cta-book-an-appointment, #cta-book-an-appointment-treatment, #cta-book-an-appointment-assessment'
  );

  bookAnAppointmentButtons.forEach((button) => {
    button.addEventListener('click', function () {
      gtag_report_conversion(
        'https://clientportal.us.zandahealth.com/clientportal/rootsandtales/AppointmentBooking/ClientAppointment'
      );
    });
  });
});

// TODO::