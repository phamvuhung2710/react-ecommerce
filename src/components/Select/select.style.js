import styled from 'styled-components'

export const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  height: 4rem;
  padding: 0 1mm;
  /* display: none; */
  cursor: pointer;
  display: inline-block;
  position: relative;
  font: normal 11px/22px Arial, Sans-Serif;
  color: black;
  border: 1px solid #eee;
  border-radius: 1rem;
  outline: 0;
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
  option {
    cursor: pointer;
    display: inline-block;
    position: relative;
    font: normal 11px/22px Arial, Sans-Serif;
    color: black;
    border: 1px solid #ccc;
    border-radius: 1rem !important;
    padding: 2rem 1rem;
    /* background-color: #00aefd; */
  }
`

export const CustomSelect = styled.div`
  .dropdown {
    --primary: #33ccff;
    --secondary: #47536b;
    width: 100%;
    position: relative;
    border-radius: 8px;
  }
  .dropdown-caret {
    color: var(--primary);
  }
  .dropdown-select {
    background-color: white;
    box-shadow: var(--shadow);
    padding: 1.5rem;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .dropdown-select * {
    pointer-events: none;
  }
  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 1rem;
    paddding: 1.5rem;
    background-color: white;
    box-shadow: var(--shadow);
    padding: 1.5rem;
    border-radius: 8px;
    display: block;
  }
  .dropdown-list:before {
    content: '';
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transform: translateY(-100%);
  }
  .dropdown-list.show {
    display: block;
  }
  .dropdown-item {
    padding: 1.5rem;
    color: var(--secondary);
    transition: all 0.25s ease;
    border-radius: 8px;
    cursor: pointer;
  }
  .dropdown-item:hover {
    color: var(--primary);
    background-color: #f1fbff;
  }
`
