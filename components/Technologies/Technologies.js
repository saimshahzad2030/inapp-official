import React, { useState } from "react";
import styles from "./Technologies.module.css";
import TechnologiesItem from "./TechnologiesItem";
import {
  backend,
  cms,
  database,
  frontend,
  infraDevops,
  mobile,
  technologiesTab,
  website,
} from "../../constants/technologies-constants";
import TechnologiesTab from "./TechnologiesTab";

function Technologies() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex d-flexnone-seven justify-content-center ournavtechnologies-home">
          <div className="lqd-column tabs-inlineh5 col-lg-10">
            <header className="mb-5 text-center">
              <h2 className={styles.mainHeading}>Technologies we work with</h2>
            </header>
          </div>
        </div>
      </div>
      <section className={styles.technologyBrands}>
        <div className={`container ${styles.centerContainer}`}>
          {technologiesTab.map(({ title }, index) => {
            return (
              <TechnologiesTab
                key={index}
                number={index + 1}
                checked={index === tabIndex}
                onChange={() => handleTabChange(index)}
                title={title}
              />
            );
          })}
          <div className={styles.content}>
            {tabIndex == 0 && <TechnologiesItem number={1} items={mobile} />}
            {tabIndex == 1 && <TechnologiesItem number={2} items={frontend} />}
            {tabIndex == 2 && <TechnologiesItem number={3} items={database} />}
            {tabIndex == 3 && <TechnologiesItem number={4} items={backend} />}
            {tabIndex == 4 && <TechnologiesItem number={5} items={cms} />}
            {tabIndex == 5 && (
              <TechnologiesItem number={6} items={infraDevops} />
            )}
            {tabIndex == 6 && <TechnologiesItem number={7} items={website} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
