package com.drpicox.game.forms;

import java.util.ArrayList;
import java.util.List;

public class NewGameForm {
    private String gameName;
    private String scenario;
    private final List<NewPlayerForm> players;

    public NewGameForm() {
      players = new ArrayList<>();
      addPlayer();
    }

    public String getGameName() {
        return gameName;
    }

    public String getScenario() {
        return scenario;
    }

    public void selectScenario(String scenario) {
        this.scenario = scenario;
    }

    public void addPlayer() {
        players.add(new NewPlayerForm());
    }

    public void changePlayerName(int playerNumber, String name) {
        players.get(playerNumber - 1).changeName(name);
    }

    public void changeGameName(String gameName) {
        this.gameName = gameName;
    }

    public List<NewPlayerForm> getPlayers() {
        return players;
    }

}
