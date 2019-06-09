const courseNameInput = document.querySelector('#inputCourseName');
const courseRatingInput = document.querySelector('#inputCourseRating');
const btnAdd = document.querySelector('#btnAdd');
const coursesList = document.querySelector('#coursesList');
const alertController = document.querySelector('ion-alert-controller');

btnAdd.addEventListener('click', () => {
  const enteredName = courseNameInput.value;
  const enteredRating = courseRatingInput.value;

  if (
    enteredName.trim().length <= 0 ||
    enteredRating.trim().length <= 0 ||
    enteredRating < 1 ||
    enteredRating > 5
  ) {
    alertController.create({
      header: 'Invalid Input',
      message: 'Please enter a valid course name and rating',
      buttons: ['OK']
    }).then(alertElement => alertElement.present());
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${enteredName}:</strong> &nbsp;${enteredRating}/5`;

  coursesList.appendChild(newItem);

  courseNameInput.value = '';
  courseRatingInput.value = '';
});
