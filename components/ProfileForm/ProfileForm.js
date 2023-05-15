import { useState } from "react";
import {
  Form,
  Fieldset,
  Label,
  Input,
  Select,
  FormButton,
  UserInfo,
  Container,
} from "./ProfileForm.styled";

export default function ProfileForm() {
  const [name, setName] = useState(""); // Initialize state for name
  const [age, setAge] = useState(""); // Initialize state for age
  const [gender, setGender] = useState(""); // Initialize state for gender
  const [editMode, setEditMode] = useState(true); // Initialize state for edit mode
  const handleNameChange = (event) => {
    // Update name state when input changes
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    // Update age state when input changes
    setAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    // Update gender state when input changes
    setGender(event.target.value);
  };
  const handleEdit = (event) => {
    // Handle edit button click
    event.preventDefault(); // Prevent default form submission behavior
    setEditMode(false); // Set edit mode to false to save user's information
  };
  return (
    <>
      {editMode ? ( // Show form if in edit mode
        <Form onSubmit={handleEdit}>
          <Fieldset>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={handleNameChange}
              required
            />
            <Label htmlFor="age">Age:</Label>
            <Input
              type="number"
              name="age"
              value={age}
              onChange={handleAgeChange}
              required
            />
            <Label htmlFor="gender">Gender: </Label>
            <Select
              value={gender}
              onChange={handleGenderChange}
              name="gender"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
            <FormButton type="submit">Save</FormButton>
          </Fieldset>
        </Form>
      ) : (
        // Show user's information if not in edit mode
        <Container>
          <UserInfo>User Information</UserInfo>
          <h2>Name: {name}</h2>
          <h2>Age: {age}</h2>
          <h2>Gender: {gender}</h2>
          <FormButton onClick={() => setEditMode(true)}>Edit</FormButton>
        </Container>
      )}
    </>
  );
}
