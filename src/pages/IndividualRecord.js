import React from "react";
import Sidebar from "../components/Sidebar";
import "../style/IndividualRecord.css";

const IndividualRecord = () => {
  return (
    <div className="IndividualRecord">
      <Sidebar />
      <div className="form-container">
        <h1>Individual Record</h1>
        <form action="" method="POST">
          <section className="row">
            <div className="input-box">
              <label for="record-number" className="subtitle">
                No:
              </label>
              <input type="number" min="1" name="record-number" />
            </div>
            <div className="input-box">
              <label for="household" className="subtitle">
                Household:
              </label>
              <input type="text" name="household" />
            </div>
            <div className="input-box">
              <label for="instit-quarter" className="subtitle">
                Institutional Living Quarter:
              </label>
              <input type="text" name="instit-quarter" />
            </div>
          </section>
          <section className="column">
            <h2>A. Identification</h2>
            <div className="input-container column">
              <div className="row">
                <div className="input-box-1">
                  <label for="province" className="subtitle">
                    Province:
                  </label>
                  <input
                    type="text"
                    name="province"
                    placeholder="e.g (Pampanga)"
                  />
                  <label for="municipality" className="subtitle">
                    City/Municipality
                  </label>
                  <input
                    type="text"
                    name="municipality"
                    placeholder="e.g (San Fernando)"
                  />
                  <label for="barangay" className="subtitle">
                    Barangay:
                  </label>
                  <input
                    type="text"
                    name="barangay"
                    placeholder="e.g (San Juan)"
                  />
                </div>
                <div className="input-box-1">
                  <label for="province" className="subtitle">
                    Name of Respondent:
                  </label>
                  <input
                    type="text"
                    name="province"
                    placeholder="e.g (Juan Pedro)"
                  />
                  <label for="municipality" className="subtitle">
                    Household Head
                  </label>
                  <input
                    type="text"
                    name="municipality"
                    placeholder="e.g (Juan Pedro)"
                  />
                  <label for="barangay" className="subtitle">
                    Total No. of Household Members:
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="barangay-members"
                    value="1"
                  />
                </div>
              </div>
              <div className="input-box-2 column">
                <label for="address" className="subtitle">
                  Address:
                </label>
                <div className="row">
                  <input
                    type="text"
                    placeholder="(Room/Floor/Unit No. and Building Name)"
                  />
                  <input type="text" placeholder="(House/Lot and Block No.)" />
                  <input type="text" placeholder="(Street Name)" />
                </div>
              </div>
            </div>
          </section>
          <section className="column">
            <h2>B. Interview Information</h2>
            <div className="input-container row">
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Visit</label>
                </div>
                <div className="row">
                  <input type="text" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Date of Visit</label>
                </div>
                <div className="row">
                  <input type="date" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Time Start</label>
                </div>
                <div className="row">
                  <input type="time" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Time End</label>
                </div>
                <div className="row">
                  <input type="time" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Result</label>
                </div>
                <div className="row">
                  <input type="text" placeholder="(C, CB, R)" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Date of Next Visit</label>
                </div>
                <div className="row">
                  <input type="date" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Name of Interviewer, Initial/Date</label>
                </div>
                <div className="row">
                  <input
                    type="text"
                    placeholder="(e.g Pablo, L / mm/dd/yyyy)"
                  />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Name of Supervisor, Initial/Date</label>
                </div>
                <div className="row">
                  <input
                    type="text"
                    placeholder="(e.g Escobar, P / mm/dd/yyyy)"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="column">
            <h2>C. Encoding Information</h2>
            <div className="input-container row">
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Date Encoded</label>
                </div>
                <div className="row">
                  <input type="date" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">Name and Initial of Encoder</label>
                </div>
                <div className="row">
                  <input type="text" placeholder="(e.g Pablo, L)" />
                </div>
              </div>
              <div className="input-box-2 column">
                <div className="row">
                  <label for="visit">
                    Name of Supervisor, Initial and Date
                  </label>
                </div>
                <div className="row">
                  <input
                    type="text"
                    placeholder="(e.g Escobar, P / mm/dd/yyyy)"
                  />
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default IndividualRecord;
