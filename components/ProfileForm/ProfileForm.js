import { useState, useEffect } from "react";
import {
  Form,
  Fieldset,
  Label,
  Input,
  Select,
  FormButton,
  UserName,
  Container,
  Span,
  List,
  EditButton,
} from "./ProfileForm.styled";

export default function ProfileForm({ medicationPlan }) {
  const [name, setName] = useState(""); // Initialize state for name
  const [lastName, setLastName] = useState(""); // Initialize state for last name
  const [age, setAge] = useState(""); // Initialize state for age
  const [gender, setGender] = useState(""); // Initialize state for gender
  const [bloodType, setBloodType] = useState(""); // Initialize state for blood type
  const [editMode, setEditMode] = useState(true); // Initialize state for edit mode
  const myPlans = medicationPlan.filter((plan) => plan.for === "Me");
  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const { name, lastName, age, gender, bloodType } = JSON.parse(savedData);
      setName(name);
      setLastName(lastName);
      setAge(age);
      setGender(gender);
      setBloodType(bloodType);
      setEditMode(false);
    }
  }, []);

  useEffect(() => {
    // Save form data to local storage
    if (!editMode) {
      const profileData = {
        name,
        lastName,
        age,
        gender,
        bloodType,
      };
      localStorage.setItem("profileData", JSON.stringify(profileData));
    }
  }, [name, lastName, age, gender, bloodType, editMode]);

  const handleNameChange = (event) => {
    // Update name state when input changes
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    // Update name state when input changes
    setLastName(event.target.value);
  };
  const handleAgeChange = (event) => {
    // Update age state when input changes
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    // Update gender state when input changes
    setGender(event.target.value);
  };

  const handleBloodTypeChange = (event) => {
    // Update blood type state when input changes
    setBloodType(event.target.value);
  };

  const handleEdit = (event) => {
    // Handle edit button click
    event.preventDefault(); // Prevent default form submission behavior
    setEditMode(!editMode); // Set edit mode to false to save user's information
  };

  return (
    <>
      {editMode ? (
        <Form onSubmit={handleEdit}>
          <Fieldset>
            <Label htmlFor="name">First Name:</Label>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={handleNameChange}
              required
            />
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              type="text"
              value={lastName}
              name="lastName"
              onChange={handleLastNameChange}
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
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
            <Label htmlFor="bloodType">Blood Type: </Label>
            <Select
              value={bloodType}
              onChange={handleBloodTypeChange}
              name="bloodType"
              required
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Select>
            <FormButton type="submit">Save</FormButton>
          </Fieldset>
        </Form>
      ) : (
        <Container>
          <UserName>
            {name} {lastName}
          </UserName>
          <section>
            <p>
              <Span> Age: </Span> {age}
            </p>
            <p>
              <Span> Gender: </Span>
              {gender}
            </p>
            <p>
              <Span> Blood Type: </Span>
              {bloodType}
            </p>
            <Span>Medications : ({myPlans.length})</Span>
            <List>
              {myPlans.map((plan) => (
                <li key={plan.id}>{plan.medication_name}</li>
              ))}
            </List>
          </section>
          <EditButton type="submit" onClick={handleEdit}>
            Edit
          </EditButton>
        </Container>
      )}
    </>
  );
}
