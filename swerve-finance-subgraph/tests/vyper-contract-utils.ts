import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Approval,
  UpdateMiningParameters,
  SetMinter,
  SetAdmin
} from "../generated/Vyper_contract/Vyper_contract"

export function createTransferEvent(
  _from: Address,
  _to: Address,
  _value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return transferEvent
}

export function createApprovalEvent(
  _owner: Address,
  _spender: Address,
  _value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("_spender", ethereum.Value.fromAddress(_spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return approvalEvent
}

export function createUpdateMiningParametersEvent(
  time: BigInt,
  rate: BigInt,
  supply: BigInt
): UpdateMiningParameters {
  let updateMiningParametersEvent = changetype<UpdateMiningParameters>(
    newMockEvent()
  )

  updateMiningParametersEvent.parameters = new Array()

  updateMiningParametersEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  updateMiningParametersEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )
  updateMiningParametersEvent.parameters.push(
    new ethereum.EventParam("supply", ethereum.Value.fromUnsignedBigInt(supply))
  )

  return updateMiningParametersEvent
}

export function createSetMinterEvent(minter: Address): SetMinter {
  let setMinterEvent = changetype<SetMinter>(newMockEvent())

  setMinterEvent.parameters = new Array()

  setMinterEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return setMinterEvent
}

export function createSetAdminEvent(admin: Address): SetAdmin {
  let setAdminEvent = changetype<SetAdmin>(newMockEvent())

  setAdminEvent.parameters = new Array()

  setAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return setAdminEvent
}
