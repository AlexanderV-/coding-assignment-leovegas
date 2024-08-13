import React, { useEffect, useMemo } from "react";
import YouTubePlayer from "./YoutubePlayer";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  closeYTModal,
  selectIsVisible,
  selectMovieId,
} from "../data/shareSlice";
import { useLazyFetchMovieTrailerQuery } from "../data/apiSlice";

interface VideoPlayerModalProps {}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = () => {
  const isVisible = useAppSelector(selectIsVisible);
  const movieId = useAppSelector(selectMovieId);
  const dispatch = useAppDispatch();
  const [fetchMovieTrailer, results] = useLazyFetchMovieTrailerQuery();
  const isFetching = results.isFetching;

  const videoKey = useMemo(
    () => results.data?.results.find((vid) => vid.type === "Trailer")?.key,
    [results.data?.results]
  );

  useEffect(() => {
    if (movieId) fetchMovieTrailer(movieId, false);
  }, [movieId, fetchMovieTrailer]);

  const onClose = () => dispatch(closeYTModal());
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      {isFetching ? (
        <div style={{ padding: "30px" }}>
          <h6 style={{ color: "black" }}>Loading...</h6>
        </div>
      ) : videoKey ? (
        <YouTubePlayer videoKey={videoKey} />
      ) : (
        <div style={{ padding: "30px" }}>
          <h6 style={{ color: "black" }}>
            No trailer available. Try another movie
          </h6>
        </div>
      )}
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default VideoPlayerModal;
