function getSkillLevel(progress: number) {
  if (typeof progress !== "number") {
    progress = parseInt(progress);
  }
  if (progress >= 0 && progress < 10) {
    return "Explorer";
  } else if (progress >= 10 && progress < 20) {
    return "Learning";
  } else if (progress >= 20 && progress < 30) {
    return "Rookie";
  } else if (progress >= 30 && progress < 40) {
    return "Just started!";
  } else if (progress >= 40 && progress < 50) {
    return "Beginner";
  } else if (progress >= 50 && progress < 60) {
    return "Intermediate";
  } else if (progress >= 60 && progress < 70) {
    return "Proficient";
  } else if (progress >= 70 && progress < 80) {
    return "Experienced";
  } else if (progress >= 80 && progress < 90) {
    return "Advanced";
  } else if (progress >= 90 && progress <= 100) {
    return "Expert";
  } else {
    return null;
  }
}

export default getSkillLevel;
