
export const getCurrentLocation = (successCallback, errorCallback) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          successCallback(latitude, longitude);
        },
        (error) => {
          errorCallback(error);
        }
      );
    } else {
      errorCallback(new Error("Geolocation is not supported by your browser."));
    }
  };
  