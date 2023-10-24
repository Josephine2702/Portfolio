import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {LinkButton} from "../../../components/button/Button";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact Me</SectionTitle>
            <Container>
                <StyledForm>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="name"/>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email"/>
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" as={"textarea"}/>
                    <LinkButton as={"button"} btnType={"primary"} type="submit">Send</LinkButton>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  ${LinkButton} {
    align-self: flex-end;
    font-family: 'Roboto';
    outline-color: ${theme.colors.headingColor};
  }
`

const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  textarea {
    resize: none;
    height: 160px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 8px 15px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  font-family: 'Nunito';
  font-size: 18px;
  color: ${theme.colors.headingColor};

  &:focus-visible {
    outline-color: ${theme.colors.primaryColor};
  }
`

const Label = styled.label`
  font-family: 'Nunito';
  font-weight: 600;
  color: ${theme.colors.headingColor};
  margin-bottom: 8px;
`

