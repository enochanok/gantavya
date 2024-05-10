import React from "react";
import "./AboutUs.css";
import Cont from "../assets/about-image2.jpg";

function AboutUs() {
  return (
    <div>
      <div className="picture-container">
        <img className="about-image" src={Cont} alt="Contact" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        <h2
          style={{
            marginTop: "0",
            marginBottom: "10px",
            fontSize: "28px",
            letterSpacing: "-1.8px",
            lineHeight: "30px",
            color: "rgb(3, 27, 78)",
          }}
        >
          Hiring a vehicle ? You are at the right place.
        </h2>
        <h5
          style={{
            marginTop: "0",
            fontWeight: "600",
            color: "#3F4254",
            fontSize: "16px",
          }}
        >
          Gantavya, Every mile becomes memory{" "}
        </h5>
      </div>
      <div style={{ padding: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <div style={{ marginBottom: "20px" }}></div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <div
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  visibility: "visible",
                  animationDelay: "0.75s",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "17px",
                      lineHeight: "26px",
                      fontWeight: "600",
                      color: "#3F4254",
                      display: "block",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    15+ Years of Providing Luxury Car Services in Nepal
                  </h4>
                  <p
                    style={{
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                      unicodeBidi: "isolate",
                      fontSize: "15px",
                      lineHeight: "1.6em",
                    }}
                  >
                    For over two decades, we've provided supreme experiences in
                    luxury car services, bringing safety and comfort to every
                    drive in Nepal.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "10px",
                  visibility: "visible",
                  animationDelay: "0.75s",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "17px",
                      lineHeight: "26px",
                      fontWeight: "600",
                      color: "#3F4254",
                      display: "block",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    Services Available in 7+ Major Cities of Nepal
                  </h4>
                  <p
                    style={{
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                      unicodeBidi: "isolate",
                      fontSize: "15px",
                      lineHeight: "1.6em",
                    }}
                  >
                    Gantavya is at your service for your extraordinary
                    adventures in major cities across Nepal. Wherever your
                    journey leads, we're here for you.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <img
                src="../src/assets/about-car.png"
                alt="home_banner"
                class="img-fluid wow fadeInUp animated animated animated animated animated animated"
                style={{
                  visibility: "visible",
                  height: "200px",
                  width: "450px",
                }}
              />
            </div>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <div
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  visibility: "visible",
                  animationDelay: "1s",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "17px",
                      lineHeight: "26px",
                      fontWeight: "600",
                      color: "#3F4254",
                      display: "block",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    Safe Rides Anyday, Everyday (24/7 365 days)
                  </h4>
                  <p
                    style={{
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                      unicodeBidi: "isolate",
                      fontSize: "15px",
                      lineHeight: "1.6em",
                    }}
                  >
                    We are never off duty. Safe and reliable journeys, every
                    day, all year round just for you. No reports of critical
                    incidents yet. Our service is the safest.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "10px",
                  visibility: "visible",
                  animationDelay: "1.25s",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "17px",
                      lineHeight: "26px",
                      fontWeight: "600",
                      color: "#3F4254",
                      display: "block",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    Range of Options - Economical Hiring to Posh Premium Cars
                  </h4>
                  <p
                    style={{
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                      unicodeBidi: "isolate",
                      fontSize: "15px",
                      lineHeight: "1.6em",
                    }}
                  >
                    Choose your favorite car from our versatile vehicle fleet
                    that caters to every need, no matter your style or budget.
                    we always provide you witht the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "-1rem",
            // marginRight: "-0.75rem",
            // marginLeft: "-0.75rem",
          }}
        >
          <div
            style={{
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              flex: "1",
            }}
          >
            <img
              alt="home_banner"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
              data-nimg="1"
              src="https://images.unsplash.com/photo-1512484186986-88ff4e9313cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              flex: "1",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "20px",
            }}
          >
            <div
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ color: "rgb(3, 27, 78)" }}>
                Only Quality For Clients
              </h2>
              <div
                style={{
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  marginBottom: "1.5rem",
                }}
              ></div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginBottom: "1.5rem",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <li style={{ flex: "1" }}>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      border: "none",
                      borderRadius: "0.25rem",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Luxury
                  </button>
                </li>
                <li
                  style={{
                    flex: "1",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                >
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      border: "none",
                      borderRadius: "0.25rem",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Comfort
                  </button>
                </li>
                <li style={{ flex: "1" }}>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      border: "none",
                      borderRadius: "0.25rem",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Prestige
                  </button>
                </li>
              </ul>
              <div style={{ width: "100%", maxWidth: "100%" }}>
                <div style={{ display: "block" }}>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Explore our luxury vehicle collection at Spark Car where
                    each vehicle is selected with precision to ensure our
                    customers a premium driving experience. With Spark Car,
                    elevate your travel expectations and experience the
                    unmatched elegance of our premium vehicles.
                  </p>
                </div>
                <div style={{ display: "none" }}>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    At Spark Car, we ensure you will have a comfortable ride and
                    a seamless journey to any destination. It's not just
                    transportation; it's an experience for your absolute
                    relaxation and enjoyment.
                  </p>
                </div>
                <div style={{ display: "none" }}>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Your safety is our priority. We do continuous monitoring
                    with regular vehicle maintenance, to guarantee a secure
                    journey every time you ride with us. Your peace of mind is
                    our promise, so you can travel confidently and safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AboutUs;
