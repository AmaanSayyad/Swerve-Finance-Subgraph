import {
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  UpdateMiningParameters as UpdateMiningParametersEvent,
  SetMinter as SetMinterEvent,
  SetAdmin as SetAdminEvent
} from "../generated/Vyper_contract/Vyper_contract"
import {
  Transfer,
  Approval,
  UpdateMiningParameters,
  SetMinter,
  SetAdmin
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._spender = event.params._spender
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateMiningParameters(
  event: UpdateMiningParametersEvent
): void {
  let entity = new UpdateMiningParameters(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.time = event.params.time
  entity.rate = event.params.rate
  entity.supply = event.params.supply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMinter(event: SetMinterEvent): void {
  let entity = new SetMinter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetAdmin(event: SetAdminEvent): void {
  let entity = new SetAdmin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
