import React, { useContext } from "react";
import { Collapse, Checkbox } from "antd";
import "../../styles/MenuCheckbox.css";
import { AuthContext } from "../../auth/AuthContext";

export const MenuCheckbox = ({ handleToggle }) => {
  const { brands } = useContext(AuthContext);
  return (
    <div>
      <Collapse title="brands" defaultActiveKey={["0"]}>
        <Collapse.Panel header="Brands" key="1">
          {brands.map((brand, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>
              <Checkbox
                onChange={() => handleToggle(brand.products)}
                key={i}
                type="checkbox"
              />
              <span>{brand.Brand}</span>
            </div>
          ))}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};
