import React, { useState, useEffect } from "react";
import {
  getAccessToken,
  authorize,
  getLocation,
  getSetting,
} from "zmp-sdk/apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icon from "@fortawesome/free-solid-svg-icons";

type OptionType = {
  method: string;
  headers: {
    access_token: string;
    code?: string;
    secret_key: string;
  };
};

const UserLocation = () => {
  const [userData, setUserData] = useState<any>(null);
  const [pending, setPending] = useState(true);

  const handleClick = () => {
    authorize({
      scopes: ["scope.userLocation", "scope.userPhonenumber"],
      success: (data) => {
        getSetting({
          success: (data) => {
            if (
              data.authSetting["scope.userLocation"] &&
              data.authSetting["scope.userLocation"] === true
            ) {
              getLocation({
                success: async (locationData) => {
                  if (locationData.token) {
                    try {
                      const accessToken = await new Promise<string>(
                        (resolve, reject) => {
                          getAccessToken({
                            success: (accessToken) => resolve(accessToken),
                            fail: (error) => reject(error),
                          });
                        }
                      );

                      const endpoint = "https://graph.zalo.me/v2.0/me/info";
                      const secretKey = "NB8X4s3GFU1n6r1DH3j4";
                      const options: OptionType = {
                        method: "GET",
                        headers: {
                          access_token: accessToken,
                          code: locationData.token,
                          secret_key: secretKey,
                        },
                      };

                      const response = await fetch(endpoint, options);
                      const userData = await response.json();

                      if (userData.data) {
                        const locationResponse = await fetch(
                          `https://nominatim.openstreetmap.org/reverse?lat=${userData.data.latitude}&lon=${userData.data.longitude}&format=json`
                        );
                        const location = await locationResponse.json();
                        setUserData(location);
                      } else {
                        console.error("Error: No user data received");
                      }
                    } catch (error) {
                      console.error("Error fetching user info:", error);
                    } finally {
                      setPending(false);
                    }
                  } else {
                    const locationResponse = await fetch(
                      `https://nominatim.openstreetmap.org/reverse?lat=${locationData.latitude}&lon=${locationData.longitude}&format=json`
                    );
                    const location = await locationResponse.json();
                    setUserData(location);
                  }
                },
                fail: (error) => {
                  console.error("Error getting location:", error);
                  setPending(false);
                },
              });
            } else {
              console.log("Location access not granted");
            }
          },
          fail: (error) => {
            console.error("Error getting settings:", error);
          },
        });
      },
      fail: (error) => {
        console.error("Error authorizing:", error);
      },
    });
  };

  useEffect(() => {
    getSetting({
      success: (data) => {
        if(Object.keys(data.authSetting).length>0){
          if (
            data.authSetting["scope.userLocation"] &&
            data.authSetting["scope.userLocation"] === true
          ) {
            console.log("Granted permissions")
            getLocation({
              success: async (locationData) => {
                if (locationData.token) {
                  try {
                    const accessToken = await new Promise<string>(
                      (resolve, reject) => {
                        getAccessToken({
                          success: (accessToken) => resolve(accessToken),
                          fail: (error) => reject(error),
                        });
                      }
                    );
                    const endpoint = "https://graph.zalo.me/v2.0/me/info";
                    const secretKey = "NB8X4s3GFU1n6r1DH3j4";
                    const options: OptionType = {
                      method: "GET",
                      headers: {
                        access_token: accessToken,
                        code: locationData.token,
                        secret_key: secretKey,
                      },
                    };
                    const response = await fetch(endpoint, options);
                    const userData = await response.json();
                    if (userData.data) {
                      const locationResponse = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${userData.data.latitude}&lon=${userData.data.longitude}&format=json`
                      );
                      const location = await locationResponse.json();
                      setUserData(location);
                      setPending(false);
                    } else {
                      console.error("Error: No user data received");
                      setPending(false);
                    }
                  } catch (error) {
                    console.error("Error fetching user info:", error);
                  } finally {
                    setPending(false);
                  }
                } else {
                  const locationResponse = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${locationData.latitude}&lon=${locationData.longitude}&format=json`
                  );
                  const location = await locationResponse.json();
                  setUserData(location);
                  setPending(false);
                }
              },
              fail: (error) => {
                console.error("Error getting location:", error);
                setPending(false);
              },
            });
          } else {
            setPending(false);
            console.log("Location access not granted");
          }
        } else {
          getLocation({
            success: async (locationData) => {
              if (locationData.token) {
                try {
                  const accessToken = await new Promise<string>(
                    (resolve, reject) => {
                      getAccessToken({
                        success: (accessToken) => resolve(accessToken),
                        fail: (error) => reject(error),
                      });
                    }
                  );
                  const endpoint = "https://graph.zalo.me/v2.0/me/info";
                  const secretKey = "NB8X4s3GFU1n6r1DH3j4";
                  const options: OptionType = {
                    method: "GET",
                    headers: {
                      access_token: accessToken,
                      code: locationData.token,
                      secret_key: secretKey,
                    },
                  };
                  const response = await fetch(endpoint, options);
                  const userData = await response.json();
                  if (userData.data) {
                    const locationResponse = await fetch(
                      `https://nominatim.openstreetmap.org/reverse?lat=${userData.data.latitude}&lon=${userData.data.longitude}&format=json`
                    );
                    const location = await locationResponse.json();
                    setUserData(location);
                    setPending(false);
                  } else {
                    console.error("Error: No user data received");
                    setPending(false);
                  }
                } catch (error) {
                  console.error("Error fetching user info:", error);
                } finally {
                  setPending(false);
                }
              } else {
                const locationResponse = await fetch(
                  `https://nominatim.openstreetmap.org/reverse?lat=${locationData.latitude}&lon=${locationData.longitude}&format=json`
                );
                const location = await locationResponse.json();
                setUserData(location);
                setPending(false);
              }
            },
            fail: (error) => {
              console.error("Error getting location:", error);
              setPending(false);
            },
          });
          console.log("is debug mode");
        }
      },
      fail: (error) => {
        console.error("Error getting settings:", error);
      },
    });
  }, []);

  if (pending) {
    return <div>Đang định vị...</div>;
  }
  if (!userData) {
    return (
      <div className="location" onClick={handleClick}>
        Cho phép ứng truy cập vị trí!
      </div>
    );
  }

  return (
    <div className="user-location">
      <FontAwesomeIcon icon={icon.faLocationDot} />{" "}
      {userData["display_name"].split(",")[0] +
        ", " +
        userData["display_name"].split(",")[1]}
    </div>
  );
};

export default UserLocation;
