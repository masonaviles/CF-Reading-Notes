# Class 13: 1/27

https://diveinto.html5doctor.com/storage.html

- From your JavaScript code, you’ll access HTML5 Storage through the localStorage object on the global window object. 
- interface Storage {
  readonly attribute unsigned long length;
  getter DOMString key(in unsigned long index);
};

- if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};

The handle_storage callback function will be called with a StorageEvent object, except in Internet Explorer where the event object is stored in window.event.

function handle_storage(e) {
  if (!e) { e = window.event; }
}

`function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}

