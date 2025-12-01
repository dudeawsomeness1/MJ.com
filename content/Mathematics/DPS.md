When I was playing Borderlands 3, I wanted to know how much damage per second (DPS) my guns had, so I came up with these formulas:
$$DPS = \frac{fDc}{A}$$
$$DPS_E = \left(\frac{D c}{A} + E_p D_E E_t\right) f = DPS + f E_p D_E E_t$$
The variables are defined as follows:

| Variable                                    | Meaning                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| $DPS$                                       | Damage per second                                                                                        |
| $DPS_E$                                     | Damage per second, including effect damage                                                               |
| $A$                                         | How many bullets are consumed per shot                                                                   |
| $c$                                         | Clip size; how many bullets are in a clip or can be consumed                                             |
| $d$                                         | Damage (per bullet projectile)                                                                           |
| $D = d n$                                   | Damage (per shot)                                                                                        |
| $D_E$                                       | The effect's damage per second                                                                           |
| $E_p = 1-(1-p)^n$                           | The probability that at least one bullet projectile out of the $n$ bullet projectiles applies the effect |
| $E_t$                                       | The time duration of the effect in seconds                                                               |
| $f = \left(\frac{c}{A r} + R_t\right)^{-1}$ | The firing frequency; a measure of how quickly the gun cycles between firing and reloading               |
| $p$                                         | The probability that a bullet projectile applies the effect                                              |
| $r$                                         | The fire rate in bullets per second                                                                      |
| $R_t$                                       | Reload time in seconds                                                                                   |

You might notice that $A$, $c$, and $n$ all indicate how many bullets there are. This is due to the fact that Borderlands 3 is not realistic, so a gun could actually shoot $n$ bullet projectiles while consuming up to $A$ bullets from the clip, which holds a maximum of $c$ bullets.

These formulas do not account for accuracy or anything else that isn't described by the variables above.