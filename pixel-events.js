var _enquiryTracked = false;

var _origSubmit = window.submitEnquiry;
window.submitEnquiry = function() {
  if (!_enquiryTracked) {
    fbq('track', 'Lead', {
      content_name: 'Contact Form - WhatsApp Enquiry',
      content_category: 'ITR / Tax Services'
    });
    _enquiryTracked = true;
  }
  if (typeof _origSubmit === 'function') {
    _origSubmit.apply(this, arguments);
  }
};
