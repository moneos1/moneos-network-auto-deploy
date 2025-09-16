// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MO is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Moneos Network", "MO") {
        _mint(msg.sender, initialSupply);
    }
}