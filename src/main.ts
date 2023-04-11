import './style.css'

/*
* Create start button, when started, display random words
* and wait 5 seconds to see if the user is going to click 
* seen, or new. If the word seen, and the user clicks new and the word isn't new,
* the game is lost, and vice versa.
*/
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="">
    <!-- Game div -->
    <div class="flex justify-center items-center flex-col gap-y-5 mt-20">
      <!-- Word text -->
      <h1 class="text-5xl" id="word">Samsung</h1> 
      <!-- Buttons (seen, new) -->
      <div class="flex gap-x-40 justify-center items-center flex-row">
        <button class="bg-blue-700 w-40 h-20 rounded-md" id="btn-seen">Seen</button>
        <button class="bg-rose-700 w-40 h-20 rounded-md" id="btn-new">New</button>
      </div>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
