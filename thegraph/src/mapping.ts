import {BigInt, log} from "@graphprotocol/graph-ts"
import {Deposit } from "../generated/BTC Tornado/ERC20Tornado"
import {AnonymitySet} from "../generated/schema"

/**
 * The script loads a AnonymitySet entity for a given address. In case it doesn't exist it instantiates a new one.
 * @param contractId: Ethereum address of a given contract
 * @returns an instance of AnonymitySet
 */
function _getAnonymitySet(contractId: string): AnonymitySet {
    let anonymitySet = AnonymitySet.load(contractId)
    if (anonymitySet == null) {
        anonymitySet = new AnonymitySet(contractId)
        // TODO: check if the capacity is ok
        anonymitySet.size = new BigInt(1024)
        log.info("Creating new AnonymitySet entity for address {}", [contractId])
    }
    // Casting from <AnonymitySet | null> to <AnonymitySet>
    return <AnonymitySet>anonymitySet
}

/**
 * The script increments AnonymitySet by 1 for a given contract.
 * @param event: an event to process
 * @returns nothing
 */
export function handleDeposit(event: Deposit): void {
    let contractId = event.address.toHex()

    let anonymitySet = _getAnonymitySet(contractId)

    let one = BigInt.fromI32(1)
    anonymitySet.size = anonymitySet.size.plus(one)

    anonymitySet.save()

    log.info("AnonymitySet increased by 1 to {}", [anonymitySet.size.toString()])
}
