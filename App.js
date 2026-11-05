import React, {useState} from 'react';
import { ScrollView, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const QuizQuestion = ({ question, imageUri, options, selectedValue, onValueChange }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text>{question}</Text>

            <Image
                source={{ uri: imageUri }}
                style={{ width: 300, height: 200 }}
            />

            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={{
                    backgroundColor: 'lightblue',
                    color: 'black'
                }}
            >
                <Picker.Item label="Select an answer..." value="" />

                {options.map((option) => (
                    <Picker.Item
                        key={option}
                        label={option}
                        value={option}
                    />
                ))}
            </Picker>
        </View>
    );
};

const App = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const checkAnswers = () => {
        if (answer1 === '' || answer2 === '' || answer3 === '' || answer4 === '') {
            Alert.alert('Incomplete Quiz', 'Please answer all questions!');
            return;
        }

        let score = 0;

        if (answer1 === 'Callie') {
            score++;
        }

        if (answer2 === 'Off the Hook') {
            score++;
        }

        if (answer3 === 'Special') {
            score++;
        }
        if (answer4 === 'Golden Eggs') {
            score++;
        }

        Alert.alert('Quiz Results', `You got ${score}/4 correct answers!`);
    };
  return (
      <ScrollView>
        <Text></Text>

          <QuizQuestion
              question="Which character is this?"
              imageUri="https://static.wikia.nocookie.net/splatoon/images/7/71/Callie_%28Splatoon_3%29.png/revision/latest/scale-to-width-down/1200?cb=20230403161512"
              options={['Callie', 'Marie', 'Pearl']}
              selectedValue={answer1}
              onValueChange={setAnswer1}
          />


          <QuizQuestion
              question="Which idol group is this character part of?"
              imageUri="https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/94/OE_Pearl_with_special_charged.jpg/300px-OE_Pearl_with_special_charged.jpg"
              options={['Squid Sisters', 'Off the Hook', 'Deep Cut']}
              selectedValue={answer2}
              onValueChange={setAnswer2}
          />

          <QuizQuestion
              question="Which weapon category does this belong to?"
              imageUri="https://oyster.ignimgs.com/mediawiki/apis.ign.com/splatoon-2/2/2a/S2special2.png?width=1280"
              options={['Main', 'Sub', 'Special']}
              selectedValue={answer3}
              onValueChange={setAnswer3}
          />

          <QuizQuestion
              question="What must players deposit in the egg basket to meet their quota in Salmon Run?"
              imageUri="https://i.redd.it/hfx8c5rg57wa1.jpg"
              options={['Power Eggs', 'Golden Eggs', 'Clams']}
              selectedValue={answer4}
              onValueChange={setAnswer4}
          />

          <TouchableOpacity
              onPress={checkAnswers}
              style={{
                  backgroundColor: 'darkblue',
                  padding: 15,
                  borderRadius: 10,
                  alignItems: 'center'
              }}
          >
              <Text style={{ color: 'white' }}>Submit Answers</Text>
          </TouchableOpacity>
      </ScrollView>
  );
};

export default App;
