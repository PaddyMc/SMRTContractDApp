pragma solidity ^0.4.17;
contract SimpleStorage {
  uint public storedData;

  function SimpleStorage(uint initialValue) public {
    storedData = initialValue;
  }

  function set(uint x) public {
    storedData = x;
  }
  
  function get() view returns (uint retVal) {
    return storedData;
  }
}