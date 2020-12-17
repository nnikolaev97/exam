package com.drpicox.game.scenarios;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.*;

@Service
public class ScenarioController {

    private ScenarioRepository scenarioRepository;

    public ScenarioController(ScenarioRepository scenarioRepository) {
        this.scenarioRepository = scenarioRepository;
    }

    public Optional<Scenario> find(String name) {
        return scenarioRepository
                .findById(name)
                .or(() -> {
                    var scenario = new Scenario(name);
                    scenarioRepository.save(scenario);
                    return Optional.of(scenario);
                });
    }
}
