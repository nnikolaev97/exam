package com.drpicox.game.testSteps.enterGame;

public class EnterGameForm {
    private String gameName;
    private String playerName;

    public String getGameName() {
        return gameName;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void changeGameName(String name) {
        this.gameName = name;
    }

    public void changePlayerName(String name) {
        this.playerName = name;
    }
}
