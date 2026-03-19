const getStoredApp = () => {
  const storedApps = localStorage.getItem("installedApps");

  if (storedApps) {
    const storedAppsData = JSON.parse(storedApps);
    return storedAppsData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedAppsData = getStoredApp();
  if (storedAppsData.includes(id)) {
    return false;
  } else {
    storedAppsData.push(id);
    const data = JSON.stringify(storedAppsData);
    localStorage.setItem("installedApps", data);
    return true;
  }
};

export { getStoredApp, addToLocalStorage };
