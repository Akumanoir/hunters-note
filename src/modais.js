// carregar modais

// import { monstersInfo } from "../mock/monsters.js"

export function loadModal(monstersInfo) {
  const loadModalContainer = document.querySelector("#load_modal")

  loadModalContainer.innerHTML = `
    <div class="modal_background grid modal">
      <div class="modal_wrapper">
        <div class="left_container">
          <img src="${monstersInfo.imageSrc[1][0]}" alt="${monstersInfo.imageSrc[1][1]}">
        </div>
        <div class="right_container">
          <div class="top">
            <h2>${monstersInfo.name}</h2>
            <div class="close-button"><i class="ph ph-x"></i></div>
          </div>
          <div class="middle grid">
            <div class="table_wrapper grid">
              <h3>World information</h3>
              <p style = "text-align: justify;">${isDescriptionEmpty(monstersInfo.description)}</p>
            </div>
            <div class="table_wrapper grid">
              <h3>Weakness</h3>
              <p>Each <i class="ph-fill ph-star" style="color: #f0ff24;"></i> star shown below represents more weakness to
                each ailment</p>
              <table>
                <tr>
                  <th>Ailment</th>
                  <th>Weakness Level</th>
                </tr>
                <tr>
                  <td>
                    <img src="./assets/table_icons/mhw-poison-status-effect-s.png" title="Poison" alt="Poison effect icon">
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="./assets/table_icons/sleep-mhw-status-effect-wiki.png" title="sleep" alt="sleep effect icon">
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="./assets/table_icons/paralysis-icon.png" title="Paralysis" alt="Paralysis effect icon">
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="./assets/table_icons/Blastblight.png" title="Blast" alt="Blast effect icon">
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="./assets/table_icons/stun-icon.png" title="Stun" alt="Stun effect icon">
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
              </table>
            </div>
            <div class="table_wrapper grid">
              <h3>Weak Points</h3>
              <p>Each <i class="ph-fill ph-star" style="color: #f0ff24;"></i> star shown below represents more weakness to
                each damage type</p>
              <table>
                <tr>
                  <th>Weak Point</th>
                  <th>
                    <img src="./assets/table_icons/great-sword-mhw_smalls.png" title="cut-damage"
                      alt="two-handed sword icon that represents cut damage">
                  </th>
                  <th>
                    <img src="./assets/table_icons/hammer-mhw_smalls.png" title="blunt-damage"
                      alt="mace icon that represents blunt damage">
                  </th>
                  <th><img src="./assets/table_icons/normal_ammo_mhw_wiki.png" title="ammo-damage"
                      alt="ammo icon that represents ammo damage"></th>
                </tr>
                <tr>
                  <td>Head &#40;Breakable&#41;</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Chest &#40;Breakable&#41;</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Front Claws &#40;Breakable&#41;</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
              </table>
            </div>
            <div class="table_wrapper grid">
              <h3>Great Jagras Carves</h3>
              <table>
                <tr>
                  <th>Carve</th>
                  <th>Frequency</th>
                </tr>
                <tr>
                  <td>Great Jagras Scale</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Hide</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane &#40;break head&#41;</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Claws</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Scale &#43;</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Hide &#43; &#40;break chest&#41;</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Claw &#43; &#40;dropped, break forelegs&#41;</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Thickhide &#40;Chest Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Shard &#40;Dropped&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane &#43; &#40;Head Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Hardclaw &#40;Forelegs Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
              </table>
            </div>
            <div class="table_wrapper grid">
              <h3>Great Jagras Rewards</h3>
              <table>
                <tr>
                  <th>Reward</th>
                  <th>Frequency</th>
                </tr>
                <tr>
                  <td>Great Jagras Hide</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Scale</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Claws</td>
                  <td class="stars_rank">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Iron Ore</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Monster Bone S</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Hide &#43;</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Scale &#43;</td>
                  <td class="stars_rank">
                    <div>High Rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Claw &#43;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Monster Bone &#43;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Thickhide &#40;Chest Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Shard &#40;Dropped&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Mane&#43; &#40;Head Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Great Jagras Hardclaw &#40;Forelegs Break&#41;</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Monster Toughbone</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Fierce Dragonvein Bone</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
                <tr>
                  <td>Rugged Mane</td>
                  <td class="stars_rank">
                    <div>Master rank</div>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>`

  // Desativar o modal ---------------------------------------------------------
  const modalContainer = document.querySelector("div.modal")
  const closeButton = document.querySelector("div.close-button")
  closeButton.addEventListener("click", () => {
    loadModalContainer.removeChild(modalContainer)
  })

  console.log(closeButton)
}

function isDescriptionEmpty(description) {
  if(description == "") {
    return "Unavailable"
  } else {
    return description
  }
}