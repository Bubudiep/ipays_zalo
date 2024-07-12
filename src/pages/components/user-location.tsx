import { useState, useEffect } from "react";
import { getAccessToken, getLocation, getSetting } from "zmp-sdk/apis";

type OptionType = {
  method: string;
  headers: {
    access_token: string;
    code?: string;
    secret_key: string;
  };
};

export const useGetAccessToken = (time) => {
  const [userData, setUserData] = useState<any>(null);
  const [pending, setPending] = useState(false);

  const fetchUserData = () => {
    getSetting({
      success: (data) => {
        if (data.authSetting["scope.userLocation"] === true) {
          getLocation({
            success: (data) => {
              setPending(true);
              if (data.token) {
                getAccessToken({
                  success: (accessToken) => {
                    if (accessToken) {
                      const endpoint = "https://graph.zalo.me/v2.0/me/info";
                      const secretKey = "NB8X4s3GFU1n6r1DH3j4";
                      const options: OptionType = {
                        method: "GET",
                        headers: {
                          access_token: accessToken,
                          code: data.token,
                          secret_key: secretKey,
                        },
                      };
                      fetch(endpoint, options)
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(data.data);
                          if (data.data) {
                            const response = fetch(
                              `https://nominatim.openstreetmap.org/reverse?lat=` +
                                data.data.latitude +
                                `&lon=` +
                                data.data.longitude +
                                `&format=json`
                            )
                              .then((response) => response.json())
                              .then((data) => {
                                console.log(data);
                                setUserData(data);
                                setPending(false);
                              })
                              .catch((error) => {
                                console.error("Error:", error);
                                setPending(false);
                              });
                          }
                        })
                        .catch((error) => {
                          console.error("Error:", error);
                          setPending(false);
                        });
                    }
                  },
                  fail: (error) => {
                    console.log(error);
                  },
                });
              } else {
                if (data) {
                  const response = fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=` +
                      data.latitude +
                      `&lon=` +
                      data.longitude +
                      `&format=json`
                  )
                    .then((response) => response.json())
                    .then((data) => {
                      setUserData(data);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }
              }
              setPending(false);
            },
            fail: (error) => {
              console.log("getLocation error", error);
            },
          });
        } else {
          setUserData(0);
        }
      },
      fail: (error) => {},
    });
  };

  useEffect(() => {
    fetchUserData(); // Fetch initially
    const intervalId = setInterval(fetchUserData, time); // Fetch every 10 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return { userData, pending };
};
