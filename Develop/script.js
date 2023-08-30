$(function () {
  // Display the current date in the header of the page.
  const currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);

  // Apply the past, present, or future class to each time block.
  $('.time-block').each(function () {
    const hour = parseInt($(this).attr('id').split('-')[1]);
    const currentHour = dayjs().hour();

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Retrieve user input from local storage and set the values of the corresponding textarea elements.
  $('.time-block').each(function () {
    const hour = $(this).attr('id').split('-')[1];
    const event = localStorage.getItem(hour);
    if (event) {
      $(this).find('textarea').val(event);
    }
  });

  // Add a listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    const hour = $(this).parent().attr('id').split('-')[1];
    const event = $(this).siblings('textarea').val();
    localStorage.setItem(hour, event);
  });
});
