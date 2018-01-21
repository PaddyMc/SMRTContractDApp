pragma solidity ^0.4.17;
contract BestContract {
  
  function BestContract() public {

  }

  struct Stats {
      uint health;
      string _type;
  }

  Stats[] public stats;

  function createStats(uint _health, string _type) public{
      stats.push(Stats(_health, _type));
  }

  function listStats() view returns (uint retVal){
    return stats.length;
     /*  for (uint i = 0; i < stats.length; i++) {
          log0(bytes32(stats[i].health));
      } */
  }
} 