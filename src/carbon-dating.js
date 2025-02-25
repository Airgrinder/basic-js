const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }

  const age = Math.ceil(
      (Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD))
  );
  return age;
}

module.exports = {
  dateSample
};
