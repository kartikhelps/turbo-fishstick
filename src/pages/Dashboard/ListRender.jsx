import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const students = [
  { no: 5, name: "hello", position: "max" },
  { no: 23, name: "buffalo", position: "min" },
  { no: 12, name: "super", position: "max" },
  { no: 9, name: "Michael", position: "min" },
  { no: 42, name: "John", position: "max" },
  { no: 77, name: "Jane", position: "max" },
  { no: 31, name: "Adam", position: "min" },
  { no: 19, name: "Alice", position: "max" },
  { no: 64, name: "Bob", position: "max" },
  { no: 50, name: "Charlie", position: "min" },
];

const ListRender = () => {
  function handleDeleteStudent() {}
  function handleEditStudent() {}

  function getFieldNames(obj) {
    return Object.keys(obj[0]);
  }

  const fieldsName = getFieldNames(students);

  return (
    <>
      {students.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#616161" }}>
                <TableCell align="center">Serial No</TableCell>
                {fieldsName &&
                  fieldsName.map((field) => {
                    return (
                      <TableCell key={field} align="center">
                        {field}
                      </TableCell>
                    );
                  })}
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students !== undefined &&
                students.map((student, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell align="center">{i + 1}</TableCell>
                      {fieldsName &&
                        fieldsName.map((field) => (
                          <TableCell
                            key={`${student.no}-${field}`}
                            align="center"
                          >
                            {student[field]}
                          </TableCell>
                        ))}
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() => handleEditStudent(student)}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => handleDeleteStudent(student)}
                          >
                            <DeleteIcon color="secondary" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No students found</Typography>
      )}
    </>
  );
};
export default ListRender;
