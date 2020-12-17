package com.drpicox.game.testMocks;

import com.drpicox.game.cards.RandomCardPicker;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class RandomCardPickerTestConfiguration {

    private final RandomCardPickerMock randomCardPickerMock;

    public RandomCardPickerTestConfiguration(RandomCardPickerMock randomCardPickerMock) {
        this.randomCardPickerMock = randomCardPickerMock;
    }

    @Bean
    @Primary
    public RandomCardPicker randomCardPicker() {
        return randomCardPickerMock;
    }
}
