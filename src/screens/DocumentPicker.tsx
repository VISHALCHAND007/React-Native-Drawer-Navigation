import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker, {isCancel} from 'react-native-document-picker';
import {FlatList} from 'react-native-gesture-handler';

interface SelectedFile {
    name: string | null; 
    type: string | null; 
    uri: string; 
    size: number | null;
}

const DocumentPickerScr = () => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const selectFiles = async () => {
    try {
      const files = await DocumentPicker.pick({
        type: DocumentPicker.types.images,
        allowMultiSelection: true,
      });
      console.log(files);
       // Update the state with selected file details
       setSelectedFiles((prevFiles) => [
        ...prevFiles,
        ...files.map((file) => ({
          name: file.name,
          uri: file.uri,
          size: file.size,
          type: file.type,
        })),
      ]);
    } catch (error) {
      if (isCancel(error)) {
        console.log(error);
      } else {
        console.log(`Error selecting files: ${error}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DocumentPicker</Text>
      <View style={styles.buttonStyle}>
        <Button title="Select Documents" onPress={selectFiles} />
      </View>

      {selectedFiles.length ? (
        <FlatList
          data={selectedFiles}
          keyExtractor={item => item.uri}
          renderItem={({item}) => (
            <Text style={styles.noResultFountText}>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={styles.noResultFountText}> No File Is Selected</Text>
      )}
    </View>
  );
};

export default DocumentPickerScr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  noResultFountText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    margin: 30,
  },
});
