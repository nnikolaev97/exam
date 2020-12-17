package com.drpicox.game.rest.games;

import com.drpicox.game.forms.NewGameBuilder;
import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.games.GameController;
import com.drpicox.game.rest.GlobalRestException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/games")
public class GameRestController {

    private final GameController gameController;
    private final NewGameBuilder newGameBuilder;

    public GameRestController(GameController gameController, NewGameBuilder newGameBuilder) {
        this.gameController = gameController;
        this.newGameBuilder = newGameBuilder;
    }

    @PostMapping
    public SuccessForm create(@RequestBody NewGameForm newGameForm) {
        var gameName = newGameForm.getGameName();
        if (gameController.find(gameName).isPresent())
            throw new GlobalRestException("The game '"+gameName+"' already exists");

        newGameBuilder.create(newGameForm);
        return new SuccessForm();
    }
}
