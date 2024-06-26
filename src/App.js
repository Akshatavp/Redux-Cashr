import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store";

import { FaCashRegister } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import Billing from "./components/Billing";
import Inventory from "./components/Inventory";
import Sales from "./components/Sales";
import Timer from "./components/helpers/Timer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <div className="App">
          <Timer />

          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                style={{
                  border: "1px solid black",
                }}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <div className="conrtainer">
                  <div className="row">
                    <FaCashRegister />
                    <span>Billing</span>{" "}
                  </div>
                </div>
              </button>
              <button
                className="nav-link "
                style={{
                  border: "1px solid black",
                }}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <div className="conrtainer">
                  <div className="row">
                    <MdOutlineInventory />
                    <span>INVENTORY</span>{" "}
                  </div>
                </div>
              </button>
              <button
                className="nav-link "
                style={{
                  border: "1px solid black",
                }}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <div className="conrtainer">
                  <div className="row">
                    <AiOutlineStock />
                    <span>SALES</span>{" "}
                  </div>
                </div>
              </button>
              {/* <button
                className="nav-link "
                style={{
                  border: "1px solid black",
                }}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <div className="conrtainer">
                  <div className="row">
                    <IoSettingsSharp />
                    <span>SETTINGS</span>{" "}
                  </div>
                </div>
              </button> */}
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <Billing />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <Inventory />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <Sales />
              </div>
              {/* <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <Settings />
              </div> */}
            </div>
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
