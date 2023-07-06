import React, { forwardRef, useRef } from "react";
import ReactToPrint from "react-to-print";
import { useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";

import PrintableTable from "../../components/PrintableTable";

import { styles } from "./styles";

import useCreateRepair from "../../hooks/services/useCreateRepair";

