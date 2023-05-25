//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="ontgrendelWereld $code"
    export function unlockWorld(code: string) {
        if (code === "CF2023") {
            const duration = 20 * 60 * 60 * 10

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }
}