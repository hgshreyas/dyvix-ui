import {
  DyvixTable,
  DyvixTableHeader,
  DyvixTableBody,
  DyvixTableRow,
  DyvixTableHead,
  DyvixTableCell
} from 'dyvix-ui';
import { DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from 'dyvix-ui';
export function TableTest() {
  return (
    <>
      <DyvixTable theme="Neon" interactive striped>
        <DyvixTableHeader>
          <DyvixTableRow>
            <DyvixTableHead>Vehicle</DyvixTableHead>
            <DyvixTableHead>Class</DyvixTableHead>
            <DyvixTableHead>Top Speed</DyvixTableHead>
          </DyvixTableRow>
        </DyvixTableHeader>
        <DyvixTableBody>
          <DyvixTableRow>
            <DyvixTableCell>Nissan Skyline GT-R R34</DyvixTableCell>
            <DyvixTableCell>Street</DyvixTableCell>
            <DyvixTableCell>180</DyvixTableCell>
          </DyvixTableRow>
          <DyvixTableRow>
            <DyvixTableCell>Porsche 911 GT3 RS</DyvixTableCell>
            <DyvixTableCell>Track</DyvixTableCell>
            <DyvixTableCell>193</DyvixTableCell>
          </DyvixTableRow>
          <DyvixTableRow>
            <DyvixTableCell>Mazda RX-7 FD</DyvixTableCell>
            <DyvixTableCell>Drift</DyvixTableCell>
            <DyvixTableCell>160</DyvixTableCell>
          </DyvixTableRow>
        </DyvixTableBody>
      </DyvixTable>
    </>
  );
}
