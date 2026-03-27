const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem('Install');
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredApp = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert(" data already exist");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("Install", data);
  }
};


const removeStoredApp = (id) => {
  const storedAppData = getStoredApp();

 
  const updatedData = storedAppData.filter(item => item !== id);

  localStorage.setItem("Install", JSON.stringify(updatedData));
};

export { addToStoredApp, getStoredApp, removeStoredApp };