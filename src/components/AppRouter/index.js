import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import NavigationBar from "../NavigationBar";
import Home from "../../pages/Home";
import ListPurchaseOrder from "../../pages/PurchaseOrder/ListPurchaseOrder";
import ManageRequest from "../../pages/PurchaseOrder/ManageRequest";
import ListInvoice from "../../pages/Invoice/List-Invoice";
import ManageInvoice from "../../pages/Invoice/Manage-Invoice";
import ListDeliveryNote from "../../pages/DeliveryNote/List-DeliveryNote";
import { DeliveryNotePrinter } from "../../pages/DeliveryNotePrinter";
import ListEmployee from "../../pages/Employee/list-employee";
import ListRepair from "../../pages/Repair/list-repair";
import LoginForm from "../../pages/Registration";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/" element={<NavigationBar />}>
          <Route path="home" element={<Home />} />
          <Route path="purchaseOrder" element={<ListPurchaseOrder />} />
          <Route path="invoice" element={<ListInvoice />} />
          {/* <Route path="invoicePrinter/:id" element={<InvoicePrinter />} /> */}
          <Route path="deliveryNote" element={<ListDeliveryNote />} />
          <Route path="deliveryNotePrinter" element={<DeliveryNotePrinter />} />
          <Route path="employee" element={<ListEmployee />} />
          <Route path="repair" element={<ListRepair />} />
        </Route>
      </>
    )
  );
  return { router };
};

export { AppRouter };
